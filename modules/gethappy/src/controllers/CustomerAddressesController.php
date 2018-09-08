<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace modules\gethappy\controllers;

use Craft;
use craft\web\Controller;
use craft\commerce\Plugin;
use yii\base\Exception;
use yii\web\HttpException;
use yii\web\Response;

/**
 * Class Customer Address Controller
 *
 * @author Adam Gee <adam@gethappy.io>
 */
class CustomerAddressesController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * Retrieve Addresses
     *
     * @return Response
     * @throws Exception
     * @throws HttpException
     */
    public function actionRetrieve()
    {   
        $customerService = Plugin::getInstance()->getCustomers();
        $addressesService = Plugin::getInstance()->getAddresses();
        $customerId = $customerService->getCustomerId();
        $addresses = $addressesService->getAddressesByCustomerId($customerId);

        return $this->asJson(['success' => true, 'addresses' => $addresses]);
    }
}
