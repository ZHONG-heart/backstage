<template>
    <div id="register">
        <div>
            <input type="text" placeholder="Please set up your account">
        </div>
        <div>
            <input type="password" placeholder="Please set up your password">
        </div>
        <div>
            <input type="password" placeholder="Please confirm your password">
        </div>
        <button id="">注册</button>
    </div>
</template>
<script>
export default {
  name: "Register"
};
</script>
<style scoped>
#register input {
  height: 32px;
  width: calc(100% - 20px);
  outline: none;
  border-radius: 5px;
  margin-top: 20px;
  padding: 0 10px;
  border: 0;
}
#register button {
  width: 100%;
  height: 32px;
  border: 0;
  margin-top: 20px;
  border-radius: 5px;
  outline: none;

  transition: 0.5s;
  color: rgb(110, 35, 8);
  background: #f7e0d8;
}
#register button:hover {
  color: #efefef;
  background: coral;
}
</style>
