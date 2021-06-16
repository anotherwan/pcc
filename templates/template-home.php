<?php
    /**
        Template Name: Home Page
    **/
    get_header();
?>
<div class="wrapper">
    <div id="animation">
        <div class="questions">THIS IS SOME TEXT ABOVE ANIMATION</div>
    </div>
</div>

<script>
  let animation = bodymovin.loadAnimation({
  container: document.getElementById('animation'),
  path: '<?php echo get_template_directory_uri(); ?>/assets/animation.json',
  renderer: 'svg',
  loop: false,
  autoplay: true, 
  name: "Question Animation"
});
</script>

<?php get_footer(); ?>