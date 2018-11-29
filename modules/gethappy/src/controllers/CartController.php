<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace modules\gethappy\controllers;

use Craft;
use craft\web\Controller;
use craft\commerce\controllers\CartController as Commerce_CartController;
use craft\commerce\Plugin;
use yii\base\Exception;
use yii\web\HttpException;
use yii\web\Response;

/**
 * Class Cart Controller
 *
 * @author Adam Gee <adam@gethappy.io>
 */
class CartController extends Commerce_CartController
{
    // Properties
    // =========================================================================

    /**
     * @var Order The cart element
     */
    private $_cart;

    // Public Methods
    // =========================================================================

    /**
     * Deletes the cart and Updates the cart with new purchasable. Only allows one product per checkout.
     */
    public function actionUpdateCart()
    {   
        $cartsService = Plugin::getInstance()->getCarts();
        $cartsService->forgetCart();

        Commerce_CartController::actionUpdateCart();
    }

    public function actionGetCart()
    {   
        $this->requireAcceptsJson();
        $productsService = Plugin::getInstance()->getProducts();
        $this->_cart = Plugin::getInstance()->getCarts()->getCart();

        $cart = $this->_cart;
        $lineItems = $cart["lineItems"];
        
        $productId = $lineItems[0]["snapshot"]["product"]["id"];
        $product = $productsService->getProductById($productId);

        foreach ($product->experienceFeaturedImage as $image) {
            $featuredImage = $image->getUrl("thumbnail");
        }
        $product->experienceFeaturedImage = $featuredImage;

        return $this->asJson(["cart" => $this->cartArray($cart), "product" => $product]);
    }
}
