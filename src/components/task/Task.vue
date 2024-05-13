<template>
  <v-card class="mx-auto my-8" elevation="16">
    <v-card-item>
      <v-checkbox @update:modelValue="onSelect" :modelValue="isSelected"> </v-checkbox>
      <v-card-title>
        {{ data.title }}
      </v-card-title>
    </v-card-item>

    <v-card-text class="taskDescription">
      {{ data.description }}
    </v-card-text>

    <v-card-text class="font-weight-bold">
      Status:
      <span>{{ data.status }} </span>
    </v-card-text>

    <v-card-text class="font-weight-bold">
      Created at:
      <span> {{ createdAt }} </span>
    </v-card-text>

    <v-card-text class="font-weight-bold">
      Due date:
      <span> {{ dueDate }} </span>
    </v-card-text>

    <v-card-text>
      <RouterLink :to="`/task/${data._id}`">Show more...</RouterLink>
    </v-card-text>

    <div class="btns">
      <v-btn
        v-if="data.status === 'active'"
        color="green"
        variant="outlined"
        @click="onStatusChange('done')"
      >
        <v-icon icon="mdi-check-bold" />
      </v-btn>
      <v-btn v-else color="blue" variant="outlined" @click="onStatusChange('active')">
        <v-icon icon="mdi-restore" />
      </v-btn>
      <v-btn color="yellow" text="Edit" variant="outlined" class="editBtn" @click="onEdit">
        <v-icon icon="mdi-pencil" />
      </v-btn>
      <v-btn color="red" text="Delete" variant="outlined" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </div>
  </v-card>
</template>

<script src="./task.js"></script>

<style scoped>
.taskDescription {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.btns {
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
}
</style>
