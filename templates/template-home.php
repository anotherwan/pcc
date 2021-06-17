<?php
    /**
        Template Name: Home Page
    **/
    get_header();
?>
<div class="wrapper" id="intro-wrapper">
    <div id="intro-anim" class="bodymovin" data-bm-path="<?php echo get_template_directory_uri(); ?>/assets/animations/question_intro.json" data-bm-renderer="svg" data-bm-loop="false">
        <p class="names">
        <?php 
            $args_names = [
                'intro_slide' => get_field('intro_slide'),
                'names' => get_field('names'),
                'name' => get_field('name'),
            ];
            echo get_component('components/names', $args_names); 
        ?>
        </p>
    </div>
</div>

<div class="wrapper" id="questions-wrapper">
    <div id="q-anim" class="bodymovin" data-bm-path="<?php echo get_template_directory_uri(); ?>/assets/animations/question.json" data-bm-renderer="svg" data-bm-loop="false">
        <div class="questions">
            <?php 
                $args_questions = [
                    'question_slides' => get_field('question_slides'),
                    'questions' => get_field('questions')
                ];
                echo get_component('components/questions', $args_questions);
            ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>