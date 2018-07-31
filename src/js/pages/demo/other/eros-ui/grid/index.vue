<template>
    <list>
        <cell> 
            <div class="Grid">
                <div class="Grid-cell">1/4</div>
                <div class="Grid-cell">auto</div>
                <div class="Grid-cell">1/4</div>
                <div class="Grid-cell">1/4</div>
            </div>
            <div class="Grid">
                <div class="Grid-cell">1/3</div>
                <div class="Grid-cell">auto</div>
                <div class="Grid-cell">1/3</div>
            </div>
            <div class="Grid">
                <div class="Grid-cell">1/2</div>
                <div class="Grid-cell">auto</div>
            </div>
            <div class="Grid">
                <div class="Grid-cell">full</div>
            </div>
        </cell>
    </list>
</template>

<style scoped lang="scss">
@import "src/js/css/reset.scss";
        .Grid {
            margin: 0 10;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: stretch;
        }
        .Grid-cell {
            align-items: center;
            justify-content: center;
            flex: 1;
            @extend %bg-silver;
            @extend %c-white;
            height: 80;
            margin: 10;
        }
        
</style>
