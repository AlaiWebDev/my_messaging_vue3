<template>
  <div class="nav-container">
    <!-- <div id="logo">
        <img
          class="img-fluid"
          src="~@/assets/img/YouneedAlain.png"
          alt="logo"
        />
      </div> -->
    
      <h1>
        <router-link to="/">
        <span id="afpa">AFPA</span>&nbsp;<span id="promo">DWWM20061</span
        >&nbsp;<span id="me">Messaging by Alain ORLUK</span>
        </router-link>
      </h1>
    
    <!--<p id="dateJour"></p>
            <h4>Date du jour</h4>-->
    <ul id="btnsNav">
      <li>
        <router-link to="/connect"><i class="fas fa-user"></i></router-link>
      </li>
      <li>
        <router-link to="/inbox"><i class="fas fa-inbox"></i></router-link>
      </li>
      <li>
        <router-link to="/account"
          ><i class="fas fa-sign-in-alt"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyNav",
};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  border: 3px solid #ffffff;
  border-radius: 10px;
  width: 100vw;
  height: 10%;
  background-color: dimgray;
  
  h1 {
    color: white;
    margin: auto;
    margin-left: 5px;
    align-items: center;
    font-size: 0.6rem;
      a{
    color:white;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    #afpa {
      color: #9aee1c;
      background-color: green;
      border: 1px solid #9aee1c;
      border-radius: 5px;
      padding-right: 10px;
      padding-left: 10px;
    }
    #me {
      color: #9aee1c;
      border-radius: 1px;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    color: white;
    li {
      margin: auto 20px auto 0px;
      list-style-type: none;
      i {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
