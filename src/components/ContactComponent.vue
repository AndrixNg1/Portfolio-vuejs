<template>
  <div class="contact-form w-full bg-gray-900 text-white py-20 px-4 lg:px-8">
    <div class="container mx-auto max-w-lg">
      <h2 class="text-4xl font-extrabold text-center mb-4">Contact Me</h2>
      <p class="text-center text-lg text-gray-300 mb-8">
        Have a question, an idea, or just want to say hi? I'm always happy to connect and collaborate. Drop me a message, and I'll get back to you as soon as possible!
      </p>
      <form @submit.prevent="sendMessage">
        <div class="mb-4">
          <label for="name" class="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
            placeholder="Your Email"
            required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-semibold mb-2">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            class="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const sendMessage = async () => {
  try {
    const response = await fetch('https://portfoli-backend-0und.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      alert('Votre message a été envoyé avec succès !');
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    } else {
      alert('Échec de l\'envoi de votre message. Veuillez réessayer.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
};
</script>

<style scoped>
.contact-form {
  background-color: #121212;
  color: #e5e5e5;
}

.contact-form .container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form p {
  color: #cccccc;
  font-size: 1.125rem;
}

.contact-form label {
  font-weight: 600;
  color: #bbbbbb;
}

.contact-form input,
.contact-form textarea {
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #444444;
  padding: 0.75rem 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #1af45b;
  outline: none;
  box-shadow: 0 0 0 3px rgba(6, 196, 133, 0.3);
}

.contact-form button {
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.3s;
}

.contact-form button:hover {
  transform: scale(1.05);
}
</style>
