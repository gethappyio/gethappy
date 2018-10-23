<?php

return array(
    'loginProviders' => [
        'facebook' => [
            'userFieldMapping' => [
                'id' => '{{ profile.getId() }}',
                'email' => '{{ profile.getEmail() }}',
                'username' => '{{ profile.getEmail() }}',
            ],
        ]
    ]
);
