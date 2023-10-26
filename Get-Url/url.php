 <?php
    /* Get Url And Use Page Name Like Title Name  */
    $site_url = get_permalink();
    $path = parse_url($site_url, PHP_URL_PATH);
    $segments = explode('/', trim($path, '/'));
    $about = str_replace('-', ' ', $segments);
    if (isset($about)) : ?>
     <span class="text-white"><?php echo ucwords($about[1]); ?></span>
 <?php endif ?>