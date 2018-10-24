<template>
  <div class="airdrop">
    <img src="../assets/airdrop.png"
      srcset="../assets/airdrop@2x.png 2x,
              ../assets/airdrop@3x.png 3x">
    <h1>ブロックチェーン講義</h1>
    <div class="counter">
      <div class="title">
        <div>講義用エアドロップ ETH</div>
      </div>
      <div class="remains">
        <div>残り</div>
        <div>{{supply.ETH.remains | numberFormat(4)}}</div>
      </div>
      <div class="supply">
        <div>合計</div>
        <div>{{supply.ETH.supply | numberFormat(4)}}</div>
      </div>
    </div>
    <div class="actions">
      <button :disabled="collected" @click="collect()">{{message}}</button>
      <span>お一人様1回限り</span>
    </div>
  </div>
</template>

<script>
import coinview from '@coinjinja/coinview-sdk'
import { numberFormat } from '../utils'
import api from '../utils/api'

export default {
  name: 'Airdrop',
  data() {
    const supply = {
      ETH: {
        supply: 1.00,
        remains: 1.00,
        collected: false
      },
    }
    const collected = false
    return { supply, collected }
  },
  computed: {
    message() {
      return !this.collected ? '0.02 ETH を受け取る' : '0.02 ETH を受け取りました'
    }
  },
  filters: { numberFormat },
  methods: {
    async collect() {
      this.collected = true
      const { userId } = await coinview.user.profile()
      api.collect(userId).then(data => {
        this.collected = data.data.collected
      })
    },
    async tokenSupply() {
      const { userId } = await coinview.user.profile()
      api.tokenSupply(userId).then(data => {
        this.supply = data.data
        this.collected = this.supply.ETH.collected
      })
    }
  },
  mounted() {
    this.tokenSupply()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.airdrop {
  margin: 0;
  padding: 20px;
}
.airdrop h1 {
  line-height: 1;
  margin: 40px 0 20px;
  font-size: 24px;
}
.counter {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}
.counter, .counter > div {
  display: flex;
  flex-wrap: wrap;
}
.counter > div {
  width: 100%;
}
.counter > div:nth-child(1) {
  font-size: 14px;
  padding-bottom: 20px;
}
.counter > div:nth-child(2) {
  font-size: 20px;
}
.counter > div:nth-child(3) {
  font-size: 20px;
  font-weight: 600;
}
.counter > div > div:nth-child(1) {
  color: #999;
  font-size: 14px;
  font-weight: 400;
}
.counter > div > div {
  flex: 1;
  align-self: center;
}
.actions {
  margin-top: 20px;
}
.actions button {
  width: 100%;
  font-size: 16px;
  background-color: #fbbc02;
  border-radius: 22px;
  height: 44px;
  border: 0;
  outline: 0;
  color: white;
  font-weight: 600;
  transition: all 0.3s;
}
.actions button:active {
  background-color: #dca500;
}
.actions button:disabled {
  background-color: #ccc;
}
.actions span {
  color: #999;
  font-size: 14px;
  margin-top: 8px;
  display: inline-block;
}
</style>
