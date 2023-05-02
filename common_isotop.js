jQuery(document).ready(function($) {
    var growItems = 3;
    var shownItems = growItems;
    var $items = $('.block-projects .element-item');
    var countItems = $items.length;
    var filterItems = '*';
    var $buttonBlock = $('.block-projects .block-footer');
    $('.block-projects .element-item:gt(' + (shownItems - 1) + ')').addClass('hidden');

    $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    $('.filters-group').on('click', 'button', function () {
        $(this).closest('.filters-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');

        $items.removeClass('hidden');
        $buttonBlock.removeClass('hidden');

        filterItems = $(this).attr('data-filter');
        if (filterItems == '*') {
            countItems = $items.length;
            shownItems = growItems;
            $('.block-projects .element-item:gt(' + (shownItems - 1) + ')').addClass('hidden');
        } else {
            countItems = $('.block-projects .element-item' + filterItems).length;
            shownItems = (growItems <= countItems) ? growItems : countItems;
            $('.block-projects .element-item' + filterItems + ':gt(' + (shownItems - 1) + ')').addClass('hidden');
        }

        if (shownItems == countItems) {
            $buttonBlock.addClass('hidden');
        }

        $grid.isotope({filter: filterItems});
    });


    $('.block-projects .projects').click(function () {
        shownItems = (shownItems + growItems <= countItems) ? shownItems + growItems : countItems;
        $items.removeClass('hidden');

        if (filterItems == '*') {
            $('.block-projects .element-item:gt(' + (shownItems - 1) + ')').addClass('hidden');
        } else {
            $('.block-projects .element-item' + filterItems + ':gt(' + (shownItems - 1) + ')').addClass('hidden');
        }

        if (shownItems == countItems) {
            $buttonBlock.addClass('hidden');
        }
        $grid.isotope();
        return false;
    });


    $('.projects-item-wrapper').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    }); //Всплывающее окно
    /**
     * Created by Andrey on 19.08.2016.
     */
});