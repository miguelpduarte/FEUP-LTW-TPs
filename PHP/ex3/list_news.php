<?php
    $db = new PDO('sqlite:news.db');
    $stmt = $db->prepare('
    SELECT news.*, users.*, COUNT(comments.id) AS comments
    FROM news JOIN
        users USING (username) LEFT JOIN
        comments ON comments.news_id = news.id
    GROUP BY news.id, users.username
    ORDER BY published DESC
    ');
    $stmt->execute();
    $articles = $stmt->fetchAll();

//   foreach( $articles as $article) {
//     echo '<h1>' . $article['title'] . '</h1>';
//     echo '<p>' . $article['introduction'] . '</p>';
//   }


    function time_elapsed_string($datetime, $full = false) {
        $now = new DateTime;
        $ago = new DateTime($datetime);
        $diff = $now->diff($ago);

        $diff->w = floor($diff->d / 7);
        $diff->d -= $diff->w * 7;

        $string = array(
            'y' => 'year',
            'm' => 'month',
            'w' => 'week',
            'd' => 'day',
            'h' => 'hour',
            'i' => 'minute',
            's' => 'second',
        );
        foreach ($string as $k => &$v) {
            if ($diff->$k) {
                $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
            } else {
                unset($string[$k]);
            }
        }

        if (!$full) $string = array_slice($string, 0, 1);
        return $string ? implode(', ', $string) . ' ago' : 'just now';
    }
?>

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Super LTW News 2018</title>    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link href="layout.css" rel="stylesheet">
    <link href="responsive.css" rel="stylesheet">
    <link href="comments.css" rel="stylesheet">
    <link href="forms.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1><a href="index.html">Super Legit News</a></h1>
      <h2><a href="index.html">Where fake news are born!</a></h2>
    </header>
    <aside id="related">
      <article>
        <h1><a href="#">Duis arcu purus</a></h1>
        <p>Etiam mattis convallis orci eu malesuada. Donec odio ex, facilisis ac blandit vel, placerat ut lorem. Ut id sodales purus. Sed ut ex sit amet nisi ultricies malesuada. Phasellus magna diam, molestie nec quam a, suscipit finibus dui. Phasellus a.</p>
      </article>        
      <article>
        <h1><a href="#">Sed efficitur interdum</a></h1>
        <p>Integer massa enim, porttitor vitae iaculis id, consequat a tellus. Aliquam sed nibh fringilla, pulvinar neque eu, varius erat. Nam id ornare nunc. Pellentesque varius ipsum vitae lacus ultricies, a dapibus turpis tristique. Sed vehicula tincidunt justo, vitae varius arcu.</p>
      </article>
      <article>
        <h1><a href="#">Vestibulum congue blandit</a></h1>
        <p>Proin lectus felis, fringilla nec magna ut, vestibulum volutpat elit. Suspendisse in quam sed tellus fringilla luctus quis non sem. Aenean varius molestie justo, nec tincidunt massa congue vel. Sed tincidunt interdum laoreet. Vivamus vel odio bibendum, tempus metus vel.</p>
      </article>
    </aside>
    <section id="news">

    <?php foreach($articles as $article) { ?>
        <article>
            <header>
                <h1><a href="news_item.php?id=<?=$article['id']?>"><?=$article['title']?></a></h1>
            </header>
            <img src="https://dummyimage.com/600x300/008ebd/fff.jpg&text=business" alt="">
            <p class='intro'><?=$article['introduction']?></p>
            <p class='fulltext'><?=$article['fulltext']?></p>
            <footer>
                <span class="author"><?=$article['username']?></span>
                <span class="tags">
                <?php
                $fulltags = explode(',', $article['tags']);
                foreach($fulltags as $tag) {
                    echo "<a href='index.html'>#$tag</a> ";
                }
                ?>
                </span>
                <span class="date"><?=time_elapsed_string('@' . $article['published'])?></span>
                <a class="comments" href="item.html#comments"><?=$article['comments']?></a>
            </footer>
        </article>
    <?php } ?>
    </section>
    <footer>
      <p>&copy; Fake News, 2017</p>
    </footer>
  </body>
</html>
