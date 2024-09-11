<?php
function my_react_theme_scripts() {
    wp_enqueue_script('my-react-theme-app', get_stylesheet_directory_uri() . '/build/index.js', ['wp-element'], null, true);
    wp_enqueue_style( 'output', get_template_directory_uri() . '/dist/output.css', array() );
}

add_action('wp_enqueue_scripts', 'my_react_theme_scripts');