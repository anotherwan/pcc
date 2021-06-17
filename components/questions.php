<?php
if (!!$c['question_slides']) :
    $qSlide = $c['question_slides'];
    foreach ($qSlide as $index => $q) :       
?>
    <div class="question" id="question-<?php echo $index ?>">
        <?php
            echo $q['questions'];
        ?>
    </div>
<?php
    endforeach;
endif;
?>