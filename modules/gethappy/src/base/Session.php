<?php
namespace modules\gethappy\base;

use Craft;
use yii\base\Behavior;

/**
 * Class Currency
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 2.0
 */
class Session extends Behavior
{
    public function addSession($key, $value)
    {
        $session = Craft::$app->getSession();
        $session->set($key,$value);
    }

    public function getSession($key)
    {   
        $session = Craft::$app->getSession();
        return $session->get($key);
    }
}
