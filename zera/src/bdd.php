<?php 


$error_message = "";
$loginCorrect = FALSE;

$threads = [

    [
        'name' => "index",
        'path' => "/index.php",
        'ArrayMsg' => [
            [
                'author' => [
                                'mail' => "loren",
                                'pwd' => "sib",
                                'username' => "Sibryde",
                                'pdp' => "CatLoren.png",
                            ],
                'content' => "Im you",
            ],[
                'author' => [
                                'mail' => "admin",
                                'pwd' => "admin",
                                'username' => "Administrateur",
                                'pdp' => "admin.png",
                            ],
                'content' => "How are you",
            ], [
                'author' => [
                            'mail' => "loren",
                            'pwd' => "sib",
                            'username' => "Sibryde",
                            'pdp' => "CatLoren.png",
                            ],
                'content' => "Hello",
            ],
        ],
    ],
    [
        'name' => "meme",
        'path' => "/thread/meme.php",
        'ArrayMsg' => [
            [
                'author' => [
                                'mail' => "liayel",
                                'pwd' => "sakura",
                                'username' => "lili",
                                'pdp' => "Memcho.png",
                            ],
                'content' => "ahahah lol",
            ],
            [
                'author' => [
                                'mail' => "etheriouse",
                                'pwd' => "mordred",
                                'username' => "ether",
                                'pdp' => "Yuzu_thinks.png",
                            ],
                'content' =>  "Fun men",
            ],
            [
                'author' => [
                                'mail' => "loren",
                                'pwd' => "sib",
                                'username' => "Sibryde",
                                'pdp' => "CatLoren.png",
                            ],
                'content' => "this joke are insane",
            ],
        ],
    ],
];

$users = [
    [
        'mail' => "liayel",
        'pwd' => "sakura",
        'username' => "lili",
        'pdp' => "Memcho.png",
    ],
    [
        'mail' => "etheriouse",
        'pwd' => "mordred",
        'username' => "ether",
        'pdp' => "Yuzu_thinks.png",
    ],
    [
        'mail' => "loren",
        'pwd' => "sib",
        'username' => "Sibryde",
        'pdp' => "CatLoren.png",
    ],
    [
        'mail' => "admin",
        'pwd' => "admin",
        'username' => "Administrateur",
        'pdp' => "admin.png",
    ],
];

function getMessageContent($msg) {
    return $msg['content'];
}

function getMessageAuthorName($msg) {
    return $msg['author']['username'];
}

function getMessageAuthorPdp($msg) {
    return $msg['author']['pdp'];
}

function getThreadByName($threads, $threadName) {
    foreach($threads as $th) {
        if($th['name'] == $threadName) {
            return $th;
        }
    }
}


function findUserByPwdMail($mail, $pwd, $users) : array {

    foreach($users as $us) {
        if($us['mail'] == $mail && $us['pwd'] == $pwd) {
            return $us;
        }
    }
}

function getUsername($us) {
    return $us['username'];
}

function getPdp($us) {
    return $us['pdp'];
}

function pushNewThread($name, $arrayThread) {
    $newThread = [
        'name' => $name,
        'path' => "/thread/".$name.".php",
        'ArrayMsg' => [],
    ];
    
    array_push($arrayThread, $newThread);
    return $arrayThread;
}

function pushNewMessage($user, $content, $thread) {
    $newMessage = [
        'author' => $user,
        'content' => $content,
    ];
    array_unshift($thread['ArrayMsg'], $newMessage);
    return $thread;
}

$admin =  [
        'mail' => "admin",
        'pwd' => "admin",
        'username' => "Administrateur",
        'pdp' => "admin.png",
];

$threads[0] = pushNewMessage($admin, "I will ban you >:c", $threads[0]);
$threads = pushNewThread("abc", $threads);

//print_r($threads[0]);

?>