<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace modules\gethappy\controllers;

use Craft;
use craft\web\Controller;
use yii\base\Exception;
use yii\web\HttpException;
use yii\web\Response;

/**
 * Class Users Controller
 *
 * @author Adam Gee <adam@gethappy.io>
 */
class UsersController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * Retrieve User Profile
     *
     * @return Response
     * @throws Exception
     * @throws HttpException
     */
    public function actionProfile()
    {   
        $user = Craft::$app->getUser()->getIdentity();

        $currentUser = [
            "id" => $user["id"],
            "email" => $user["email"],
            "firstName" => $user["firstName"],
            "lastName" => $user["lastName"]
        ];

        return $this->asJson(['success' => true, 'user' => $currentUser]);
    }
}



