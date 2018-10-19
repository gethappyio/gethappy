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
class GatewayController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * Deletes the cart and Updates the cart with new purchasable. Only allows one product per checkout.
     */
    public function actionGetGatewayById()
    {   
        $this->requirePostRequest();
        $id = Craft::$app->getRequest()->getRequiredBodyParam('id');

        $gatewayService = Plugin::getInstance()->getGateways();

        return $this->asJson(['success' => true, 'gateway' => $gatewayService->getGatewayById($id)]);

 
    }
}
