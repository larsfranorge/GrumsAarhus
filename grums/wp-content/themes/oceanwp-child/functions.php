<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'parent-style'; // This is 'oceanwp-style' for the oceanwp theme.
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
  
}

/*
add_action( 'wp_enqueue_scripts', 'pictureChange' );
function pictureChange() {
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", array(), null, true);
    wp_enqueue_script( 'picturechange-js', get_stylesheet_directory_uri() . '/js/picturechange.js', array( 'jquery' ), null, true );
}
*/

