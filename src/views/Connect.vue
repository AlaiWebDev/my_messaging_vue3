<template>
  <div class="connect">
    <h2>CONNEXION</h2>
    <form method="POST">
      <div class="form-group">
        <label for="login">Pseudo</label>
        <input
          name="login"
          type="text"
          v-model="userLogin"
          class="form-control"
          id="login"
          placeholder="Pseudo..."
        />
      </div>
      <div class="form-group">
        <label for="pwd">Mot de passe</label>
        <input
          name="pwd"
          type="password"
          v-model="userPwd"
          class="form-control"
          id="pwd"
          placeholder="Mot de passe..."
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="remember" />
        <label class="form-check-label" for="remember"
          >Se souvenir de moi</label
        >
      </div>
      <button name="submit" type="submit" class="btn btn-primary">
        Connexion
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Connect",
};
</script>
<style lang="scss" scoped>
.connect{
  width:80vw;
  margin: auto;
  margin-top: 40%;
}
</style>