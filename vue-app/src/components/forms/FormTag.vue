<template>
    <form 
        @submit.prevent="submit"
        :ref="name"
        :event="event"
        autocomplete="off" 
        :method="method" 
        :action="action" 
        class="needs-validation" 
        novalidate>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'FormTag',
    props: ["method", "action", "name", "event"],
    methods: {
        submit() {
            let myForm = this.$refs[this.$props.name];

            if (myForm.checkValidity()) {
                console.log("My event name", this.$props['event']);
                console.log("Name", this.$props.name);
                this.$emit(this.$props['event']);
            }
            myForm.classList.add("was-validated");
        }
    },
}
</script>