<script setup>
import BasicButton from "../commons/BasicButton.vue";
import {reactive, ref} from "vue";
import {geocode} from '../../utils/geocoding'

const formData = reactive({
  name: '',
  description: '',
  price: 0,
  url: '',
  address: ''
});
const loading = ref(false);
const id = ref();

async function saveAd () {
  loading.value = true;

  try {
    const {lat, lon} = await geocode(formData.address)

    const addResponse = await fetch('http://localhost:3001/ad', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        ...formData,
        lat,
        lon
      })
    })

    const data = await addResponse.json();
    id.value = data.id;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div v-if="loading">Trwa zapisywanie</div>
  <p v-if="id">Twoje ogłoszenie {{formData.name}} zostało dodane pod id {{formData.id}}</p>
  <form action="" class="add-form" @submit.prevent="saveAd">
    <h1>Dodawnie ogłoszenia </h1>
    <p>
      <label>Nazwa:
        <input type="text" name="name" required maxlength="99" v-model="formData.name">
      </label>
    </p>
    <p>
      <label>Opis:
        <textarea name="description" maxlength="999" v-model="formData.description"/>
      </label>
    </p>
    <p>
      <label>price:
        <input type="number" name="price" required maxlength="99" v-model="formData.price">
      </label>
    </p>
    <p>
      <label>url:
        <input type="url" name="url" maxlength="200" v-model="formData.url">
      </label>
    </p>
    <p>
      <label>Adres:
        <input type="text" name="address" maxlength="99" v-model="formData.address">
      </label>
    </p>
    <BasicButton text="Zapisz"/>
  </form>
</template>

<style scoped>
.add-form{
  max-width: 600px;
  margin: 30px auto 0;
}

label {
  display: block;
  font-weight: bold;
  margin-top: 10px;
  font-size: 12px;
}

input, textarea {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #000;
}

textarea {
  resize: none;
}

.add-form button{
  margin-top: 20px;
  width: 100%;
  padding: 10px;
}
</style>
