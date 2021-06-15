<?php

    function enqueue_global_resources() {
        wp_enqueue_style('styles');
        wp_enqueue_script('app');
    }

    if(is_page_template('templates/template-home.php')) {
        wp_enqueue_style('template-home');
        wp_enqueue_script('template-home');
    }

    add_action('wp_enqueue_scripts', 'enqueue_global_resources');