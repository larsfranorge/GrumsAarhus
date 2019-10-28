<?php
/*
* Plugin Name: Grums Moments Sign up
* Plugin URI: https://www.larsiversen.nu/grums
* Description: This is a WordPress Sign-up Plugin based on HTML5, CSS, JS and PHP
* Version: 0.6.0
* Author: Lars Iversen
* Author: https://www.larsiversen.nu/grums
* License: GPL2
*/

function register_form()
{

    $content = '';
    $content .= '<div class="register">';
    $content .= '<div class="register-form">';
    $content .= '<div class="popupCloseButton">X</div>';
    $content .= '<img class="background-img" src=" '.plugins_url("registerplugin/img/pattern.png").' " >';
    $content .= '<div id="promotion-header">';
    $content .= '<h1 id="promotion-header-title"><span>welcome to</span><strong>grums </strong>moments</h1></div>';
    $content .= '<img class="coin-gif" src" '.plugin_url("registerplugin/img/coinspinnormal.gif").' ">';
    $content .= '<div class="form">';
    $content .= '<form action="#">';
    $content .= '<div id="promotion-body">';
    $content .= '<p class="promotion-body-text">A moment that goes to a whole new level.<br>You can turn your passion for sustainability into real rewards.</p>';
    $content .= '<p class="promotion-body-text">Sign up to be in a moment with Grums</p></div>';
    $content .= '<div class="input">';
    $content .= '<input type="text" id="username" placeholder="Your full name" name="username" required>';
    $content .= '</div>';
    $content .= '<div class="input">';
    $content .= '<input type="email" id="email" placeholder="your@email.com" name="email" required>';
    $content .= '</div>';
    $content .= '<div id="submitForm">';
    $content .= '<input type="submit" id="submitBtn" name="submitBtn" value="Sign up">';
    $content .= '</div>';
    $content .= '</form>';
    $content .= '</div>';
    $content .= '</div>';
    $content .= '</div>';
    
    return $content;
    
}
 #First parameter is a self choosen name for a unique short-code. Second parameter is the name of the function that creates the newsletter
 add_shortcode('show_registerform','register_form');

 add_action('wp_enqueue_scripts','register_styles_and_scripts_for_plugin');

 function register_styles_and_scripts_for_plugin() 
 {
     wp_enqueue_style('fontAwesomCDN', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css');
     
     wp_enqueue_style('CustomFontDosisAndJosefinSlab','https://fonts.googleapis.com/css?family=Dosis:200,300,400|Josefin+Slab:400,700&display=swap');
     
     wp_enqueue_style('CustomStylesheet',plugins_url('registerplugin/css/style.css'));
     
     /*fjerner tidligere versioner af jquery (hvis der er nogen)*/
     wp_deregister_script('jquery');
     
     wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
     
     /* Array('jquery') henviser til at jquery skal indlæses først. 
     'true' henviser til at scriptet indlæses til sidst. 
     'false' ville betyde at den blev indlæst først.*/
     wp_enqueue_script('CustomScript', plugins_url('registerplugin/js/script.js'), array('jquery'), null, true);
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 