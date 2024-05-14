<template>
  <v-container>
    <TaskModal
      v-if="isTaskModalOpen"
      :isOpen="isTaskModalOpen"
      :editingTask="editingTask"
      @close="toggleTaskModal"
      @taskSave="onTaskSave"
      @taskAdd="onTaskAdd"
    />

    <confirm-dialog
      :isOpen="isDeleteDialogOpen"
      title="Warning!"
      :text="confirmDialogText"
      @close="toggleDeleteDialog"
      @confirm="onDeleteSelected"
    />

    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn color="info" @click="toggleTaskModal">Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row>
      <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" md="4" sm="6" xs="3">
        <Task
          :data="taskData"
          :isSelected="selectedTasks.has(taskData._id)"
          @taskEdit="onTaskEdit(taskData)"
          @taskDelete="onTaskDelete(taskData._id)"
          @taskStatusChange="onTaskStatusChange"
          @taskSelect="toggleTaskId(taskData._id)"
        />
      </v-col>
    </v-row>
  </v-container>

  <v-btn
    :disabled="isDeleteSelectedBtnDisabled"
    class="deleteSelected"
    color="error"
    variant="plain"
    @click="toggleDeleteDialog"
  >
    Delete selected <v-icon icon="mdi-delete-outline" />
  </v-btn>
</template>

<script src="./todoList.js"></script>

<style scoped>
.deleteSelected {
}
</style>
