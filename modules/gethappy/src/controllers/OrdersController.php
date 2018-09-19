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

        foreach($orders as $num => $order) {
            $cleanedOrder = [];
            $cleanedOrder["dateOrdered"] = $order["dateOrdered"];
            $cleanedOrder["dateFormatted"] = $order["dateOrdered"]->format('F d, Y');
            $cleanedOrder["itemTotal"] = $order["itemTotal"];
            $cleanedOrder["number"] = $order["number"];
            $cleanedOrder["id"] = $order["id"];
            $orders[$num] = $cleanedOrder;
        }

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
        $number = Craft::$app->getRequest()->getRequiredBodyParam('number');

        if(!$number) {
            $error = Craft::t('commerce', 'Need to pass order number.');
            if (Craft::$app->getRequest()->getAcceptsJson()) {
                return $this->asJson(['error' => $error]);
            }
        }

        $order = $ordersService->getOrderByNumber($number);

        if(!$order) {
            $error = Craft::t('commerce', 'Order does not exist.');
            if (Craft::$app->getRequest()->getAcceptsJson()) {
                return $this->asJson(['error' => $error]);
            }
        }

        $cleanedOrder = [];
        $cleanedOrder["dateOrdered"] = $order["dateOrdered"];
        $cleanedOrder["dateFormatted"] = $order["dateOrdered"]->format('F d, Y');
        $cleanedOrder["itemTotal"] = $order["itemTotal"];
        $cleanedOrder["number"] = $order["number"];
        $cleanedOrder["id"] = $order["id"];

        $shippingId = $order["shippingAddressId"];
        if($shippingId) {
            $address = $addressesService->getAddressById($shippingId);
        }
        return $this->asJson(['success' => true, 'order' => $cleanedOrder, 'address' => $address]);
    }
}

    

