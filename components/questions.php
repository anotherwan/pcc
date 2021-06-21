<?php
if (!!$c['question_slides']) :
    $qSlide = $c['question_slides'];
    foreach ($qSlide as $index => $q) :   
?>
<li class="slide">
    <!-- <div id="q-anim"> -->
    <div id="q-anim" class="bodymovin" data-bm-path="<?php echo get_template_directory_uri(); ?>/assets/animations/question.json" 
    data-bm-renderer="svg" data-name="qanim" data-bm-loop="false">
    </div>
        <ul class="questions">
            <li class="question" id="question-<?php echo ($index+1) ?>">
                <?php
                    echo $q['questions'];
                ?>
            </li>
            <div class="q-number">
                <?php echo $index+1; ?>
            </div>
        </ul>
    
</li>
<?php
    endforeach;
endif;
?>