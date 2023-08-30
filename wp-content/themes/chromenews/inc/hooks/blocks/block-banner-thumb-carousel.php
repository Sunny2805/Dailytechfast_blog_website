<div class="af-main-banner-thumb-posts">
    <div class="section-wrapper">
        <div class="slick-wrapper banner-thumb-carousel small-grid-style af-widget-carousel clearfix">
            <?php
            $chromenews_banner_layout = chromenews_get_option('select_main_banner_layout_section');
            $chromenews_grid_design = 'grid-design-texts-over-image';
            if($chromenews_banner_layout == 'layout-compressed'){
                $chromenews_grid_design = 'grid-design-default';
            }

            $chromenews_posts_filter_by = chromenews_get_option('select_editors_picks_filterby');

            if ($chromenews_posts_filter_by == 'tag') {
                $chromenews_editors_pick_category = chromenews_get_option('select_editors_picks_news_tag');
                $chromenews_filterby = 'tag';
            } else {

                $chromenews_editors_pick_category = chromenews_get_option('select_editors_picks_news_category');
                $chromenews_filterby = 'cat';
            }

            $chromenews_featured_posts = chromenews_get_posts(5, $chromenews_editors_pick_category, $chromenews_filterby);
            if ($chromenews_featured_posts->have_posts()) :
                $chromenews_count = 1;
                while ($chromenews_featured_posts->have_posts()) :
                    $chromenews_featured_posts->the_post();
                    global $post;

                    ?>
            <div class="slick-item">
                    <div class="af-sec-post">
                        <?php do_action('chromenews_action_loop_grid', $post->ID, $chromenews_grid_design); ?>
                    </div>
            </div>

                    <?php
                    $chromenews_count++;
                endwhile;
                wp_reset_postdata();
                ?>
            <?php endif; ?>
        </div>
        <div class="af-thumb-navcontrols af-slick-navcontrols"></div>
    </div>
</div>
<!-- Editors Pick line END -->
