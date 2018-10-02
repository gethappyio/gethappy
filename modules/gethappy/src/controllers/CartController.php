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
}
