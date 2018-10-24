<?php

return array(
    'loginProviders' => [
        'facebook' => [
            'userFieldMapping' => [
                'id' => '{{ profile.getId() }}',
                'email' => '{{ profile.getEmail() }}',
                'username' => '{{ profile.getEmail() }}',
                'firstName' => '{{ profile.getFirstName() }}',
                'lastName' => '{{ profile.getLastName() }}',
            ],
        ]
    ]
);
