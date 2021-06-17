<?php
    /**
        Template Name: Home Page
    **/
    get_header();
?>
<div class="wrapper intro-wrapper">
    <div id="intro">
        <?php 
            $args_names = [
                'intro_slide' => get_field('intro_slide'),
                'names' => get_field('names'),
                'name' => get_field('name'),
            ];
            echo get_component('components/names', $args_names); 
        ?>
    </div>
</div>

<div class="wrapper questions-wrapper">
    <div id="q">
        <p class="questions">
            <span class="question part1">50 year old presents on Friday with a high grade symptomatic AV block +/- abnormal echo and referrerd for a pacemaker</span>
        </p>
    </div>
</div>

<script>
    let animation = bodymovin.loadAnimation({
        container: document.getElementById('intro'),
        path: '<?php echo get_template_directory_uri(); ?>/assets/animations/question_intro.json',
        renderer: 'svg',
        loop: false,
        autoplay: true, 
        name: "Question Intro Animation"
    });
</script>

<?php get_footer(); ?>