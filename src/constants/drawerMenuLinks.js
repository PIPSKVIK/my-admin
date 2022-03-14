import { ref } from "vue";

export const btnLinks = ref([
  {
    label: "home",
    icon: "pi pi-home",
    url_name: "HomePage",
  },
  {
    label: "my-budget",
    icon: "pi pi-dollar",
    url_name: "MyBudget",
  },
  {
    label: "my-notifications",
    icon: 'pi pi-caret-down',
    url_name: "MyNotifications",
  }
]);
