<p class="names">
<?php 
    if (!!$c['intro_slide']) :
        $introslide = $c['intro_slide'];
        foreach ($introslide['names'] as $index => $names) :
?>
    <span class="name" id="name-<?php echo $index ?>">
        <?php 
            echo $names['name']; 
        ?>
    </span>
<?php 
        endforeach; 
    endif;
?>
</p>