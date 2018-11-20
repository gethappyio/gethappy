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
        $productsService = Plugin::getInstance()->getProducts();
        $variantsService = Plugin::getInstance()->getVariants();

        $currentCustomer = $customerService->getCustomer();
        $orders = $ordersService->getOrdersByCustomer($currentCustomer);

        foreach($orders as $num => $order) {
            $cleanedItems = [];
            foreach($order["lineItems"] as $index => $item) {
                $cleanedItem = [];
                $variant = $variantsService->getVariantById($item["purchasableId"]);
                $product = $productsService->getProductById($variant["productId"]);
                $cleanedItem["product"] = $product;
                $cleanedItem["variant"] = $variant;
                $cleanedItem["lineItem"] = $item;
                $cleanedItems[] = $cleanedItem;
            }

            $cleanedOrder = [];
            $cleanedOrder["dateOrdered"] = $order["dateOrdered"];
            $cleanedOrder["dateFormatted"] = $order["dateOrdered"]->format('F d, Y');
            $cleanedOrder["itemTotal"] = $order["itemTotal"];
            $cleanedOrder["number"] = $order["number"];
            $cleanedOrder["id"] = $order["id"];
            $cleanedOrder["lineItem"] = $cleanedItems;
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
        $productsService = Plugin::getInstance()->getProducts();
        $variantsService = Plugin::getInstance()->getVariants();
        $gatewaysService = Plugin::getInstance()->getGateways();
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
        $cleanedItems = [];
        foreach($order["lineItems"] as $num => $item) {
            $variant = $variantsService->getVariantById($item["purchasableId"]);
            $product = $productsService->getProductById($variant["productId"]);
            $cleanedItem["product"] = $product;
            $cleanedItem["variant"] = $variant;
            $cleanedItem["lineItem"] = $item;
            $cleanedItems[] = $cleanedItem;
        }

        $cleanedOrder = [];
        $cleanedOrder["dateOrdered"] = $order["dateOrdered"];
        $cleanedOrder["dateFormatted"] = $order["dateOrdered"]->format('F d, Y');
        $cleanedOrder["itemTotal"] = $order["itemTotal"];
        $cleanedOrder["number"] = $order["number"];
        $cleanedOrder["id"] = $order["id"];
        $cleanedOrder["orderStatusId"] = $order["orderStatusId"];
        $cleanedOrder["isCompleted"] = $order["isCompleted"];
        $cleanedOrder["shippingMethodHandle"] = $order["shippingMethodHandle"];
        $cleanedOrder["lineItems"] = $cleanedItems;
        $cleanedOrder["paymentMethod"] = $gatewaysService->getGatewayById($order["gatewayId"])["name"];
        $cleanedOrder["receipt"] = $order->getPdfUrl('receipt');

        $cleanedTotals = [];
        $cleanedTotals["Subtotal"] = "$" . number_format((float)$order["itemSubtotal"], 2, '.', '');
        $cleanedTotals["Tax"] = "$0.00";
        $cleanedTotals["Shipping"] = "$0.00";
        $cleanedTotals["Total"] = "$" . number_format((float)$order["itemTotal"], 2, '.', '');

        $shippingId = $order["shippingAddressId"];
        if($shippingId) {
            $address = $addressesService->getAddressById($shippingId);
        } else {
            $address = "";
        }
        return $this->asJson(['success' => true, 'order' => $cleanedOrder, 'totals' => $cleanedTotals, 'address' => $address]);
    }
}

    

