<template>
  <v-card class="mx-auto my-8" elevation="16">
    <v-card-item>
      <v-checkbox></v-checkbox>
      <v-card-title>
        {{ data.title }}
      </v-card-title>
    </v-card-item>

    <v-card-text>
      {{ data.description }}
    </v-card-text>

    <v-card-text class="font-weight-bold">
      Status:
      <span>{{ data.status }} </span>
    </v-card-text>

    <v-card-text> Created at: {{ createdAt }} </v-card-text>

    <v-card-text> Due date: {{ dueDate }} </v-card-text>

    <div class="btns">
      <v-btn color="green" variant="outlined">
        <v-icon icon="mdi-check-bold" />
      </v-btn>
      <v-btn color="yellow" text="Edit" variant="outlined" class="editBtn">
        <v-icon icon="mdi-pencil" />
      </v-btn>
      <v-btn color="red" text="Delete" variant="outlined">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </div>
  </v-card>
</template>

<script src="./task.js"></script>

<style scoped>
.btns {
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
}
</style>
