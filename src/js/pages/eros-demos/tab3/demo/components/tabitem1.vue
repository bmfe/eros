<template>
    <div class="wrapper">
        <scroller class="scroller" @loadmore="onload" loadmoreoffset="10">
            <div class="row" v-for="(name, index) in rows" :key="index" :ref="'item'+index">
                <text class="text" :ref="'text'+index">{{name}}</text>
            </div>
        </scroller>
    </div>
</template>
<script>
export default {
    data () {
        return {
            rows: []
        }
    },
    created () {
        for (let i = 0; i < 30; i++) {
            this.rows.push('row ' + i)
        }
    },
    methods: {
        onload () {
            setTimeout(() => {
                for (let i = 0; i < 30; i++) {
                    this.rows.push('row ' + i)
                }
            }, 500)
        }
    }
}
</script>
<style scoped>
.wrapper {
    flex: 1;
}
.scroller {
    width: 750px;
}

.row {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
}

.text {
    font-size: 45px;
    color: #666666;
}

.group {
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
}

.button {
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
    color: #41B883;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
}
</style>