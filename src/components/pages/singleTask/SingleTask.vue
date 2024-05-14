<template>
  <v-card v-if="task" class="mx-auto my-8" elevation="16" cols="12" md="4" sm="6" xs="3">
    <TaskModal
      v-if="isEditModalOpen"
      :isOpen="isEditModalOpen"
      :editingTask="task"
      @close="toggleTaskModal"
      @taskSave="onSave"
    />

    <v-card-item>
      <v-card-title class="text-wrap">
        {{ task.title }}
      </v-card-title>
    </v-card-item>

    <v-card-text>
      {{ task.description }}
    </v-card-text>

    <v-card-text class="font-weight-bold">
      Status:
      <span>{{ task.status }} </span>
    </v-card-text>

    <v-card-text class="font-weight-bold">
      Created at:
      <span> {{ createdAt }} </span>
    </v-card-text>

    <v-card-text class="font-weight-bold">
      Due date:
      <span> {{ dueDate }} </span>
    </v-card-text>

    <div class="btns">
      <v-btn color="green" variant="outlined" @click="onStatusChange('done')">
        <v-icon icon="mdi-check-bold" />
      </v-btn>
      <v-btn color="blue" variant="outlined" @click="onStatusChange('active')">
        <v-icon icon="mdi-restore" />
      </v-btn>
      <v-btn color="yellow" text="Edit" variant="outlined" class="editBtn" @click="toggleTaskModal">
        <v-icon icon="mdi-pencil" />
      </v-btn>
      <v-btn color="red" text="Delete" variant="outlined" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </div>
  </v-card>
  <h4 v-else>Task not found!</h4>
</template>

<script src="./singleTask.js"></script>

<style scoped>
.btns {
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
}
</style>
