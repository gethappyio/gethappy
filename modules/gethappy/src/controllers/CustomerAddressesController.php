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

    /**
     * Retrieve single address using its id
     * 
     * @return Response
     * @throws Exception
     * @throws HttpException
     */
    public function actionRetrieveById()
    {
        $this->requirePostRequest();
        $addressesService = Plugin::getInstance()->getAddresses();
        $countriesService = Plugin::getInstance()->getCountries();

        $id = Craft::$app->getRequest()->getRequiredBodyParam('id');

        if(!$id) {
            $error = Craft::t('commerce', 'Need to pass address id.');
            if (Craft::$app->getRequest()->getAcceptsJson()) {
                return $this->asJson(['error' => $error]);
            }
        }

        $address = $addressesService->getAddressById($id);

        if(!$address) {
            $error = Craft::t('commerce', 'Address does not exist');
            if (Craft::$app->getRequest()->getAcceptsJson()) {
                return $this->asJson(['error' => $error]);
            }
        }

        $countries = $countriesService->getAllCountriesAsList();

        return $this->asJson(['success' => true, 'address' => $address, 'countries' => $countries]);
    }

    /**
     * Retrieve countries available to ship to
     * 
     * @return Response
     * @throws Exception
     * @throws HttpException
     */
    public function actionGetCountries()
    {
        $countriesService = Plugin::getInstance()->getCountries();
        $countries = $countriesService->getAllCountriesAsList();

        return $this->asJson(['success' => true, 'countries' => $countries]);   
    }
}
