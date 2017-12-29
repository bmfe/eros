<template>
    <div class="wrapper">
        <list class="scroller" ref="list" @loadmore="getData" loadmoreoffset="10" showRefresh="true" @refresh="getData(true)">
            <cell class="row" v-for="(name, index) in rows" :ref="'item'+index">
                <text class="text" :ref="'text'+index">{{name}}</text>
            </cell>
        </list>
    </div>
</template>
<script>
const dom = weex.requireModule('dom')
export default {
    data() {
        return {
            rows: []
        }
    },
    created() {
        this.getData(true)
    },
    methods: {
        getData(isRefresh = false) {
            setTimeout(() => {
                let cache = []
                for (let i = 0; i < 30; i++) {
                    cache.push('row ' + i)
                }
                if(isRefresh){
                    this.rows = cache
                }else {
                    this.rows.push(cache)
                }

                isRefresh && this.$refs["list"].refreshEnd()
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