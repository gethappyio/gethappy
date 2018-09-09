<?php

namespace modules\gethappy\controllers;

use Craft;
use craft\web\Controller;
use craft\commerce\Plugin;
use yii\base\Exception;
use yii\web\HttpException;
use yii\web\Response;

/**
 * Class Orders Controller
 *
 * @author Adam Gee <adam@gethappy.io>
 */
class OrdersController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * Retrieve order history for current user
     *
     * @return Response
     * @throws Exception
     * @throws HttpException
     */
    public function actionHistory()
    {   
        $customerService = Plugin::getInstance()->getCustomers();
        $ordersService = Plugin::getInstance()->getOrders();

        $currentCustomer = $customerService->getCustomer();
        $orders = $ordersService->getOrdersByCustomer($currentCustomer);

        return $this->asJson(['success' => true, 'orders' => $orders]);
    }

    /**
     * Get order by its id
     *
     * @return Response
     * @throws Exception
     * @throws HttpException
     */
    public function actionGetOrder()
    {   
        $addressesService = Plugin::getInstance()->getAddresses();
        $ordersService = Plugin::getInstance()->getOrders();
        $id = Craft::$app->getRequest()->getRequiredBodyParam('orderId');

        if(!$id) {
            $error = Craft::t('commerce', 'Need to pass order id.');
            if (Craft::$app->getRequest()->getAcceptsJson()) {
                return $this->asJson(['error' => $error]);
            }
        }

        $order = $ordersService->getOrderById($id);

        if(!$order) {
            $error = Craft::t('commerce', 'Order does not exist.');
            if (Craft::$app->getRequest()->getAcceptsJson()) {
                return $this->asJson(['error' => $error]);
            }
        }

        $shippingId = $order["shippingAddressId"];
        if($shippingId) {
            $address = $addressesService->getAddressById($shippingId);
        }
        return $this->asJson(['success' => true, 'order' => $order, 'address' => $address]);
    }
}



