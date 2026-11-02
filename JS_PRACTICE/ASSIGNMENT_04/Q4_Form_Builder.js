// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
    constructor(fields, containerId, outputId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
        this.output = document.getElementById(outputId);
    }

    createForm() {
        const form = document.createElement("form");
        form.id = "generatedForm";

        this.fields.forEach((field, index) => {
            const label = document.createElement("label");
            label.htmlFor = `field_${index}`;
            label.textContent = field.label;

            let input;
            if (field.type === "textarea") {
                input = document.createElement("textarea");
            } else if (field.type === "select") {
                input = document.createElement("select");
                (field.options || []).forEach(optionText => {
                    const option = document.createElement("option");
                    option.value = optionText;
                    option.textContent = optionText;
                    input.appendChild(option);
                });
            } else {
                input = document.createElement("input");
                input.type = field.type || "text";
            }

            input.id = `field_${index}`;
            input.name = field.name;
            input.required = Boolean(field.required);
            form.append(label, input);
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        form.appendChild(submitButton);

        form.addEventListener("submit", event => {
            event.preventDefault();
            const data = this.getFormData();
            this.output.textContent = JSON.stringify(data, null, 2);
        });

        this.container.replaceChildren(form);
    }

    // Return all entered values as an object.
    getFormData() {
        const data = {};
        this.fields.forEach((field, index) => {
            const input = document.getElementById(`field_${index}`);
            data[field.name] = input.value;
        });
        return data;
    }
}

const fields = [
    { type: "text", name: "username", label: "Username", required: true },
    { type: "email", name: "email", label: "Email", required: true },
    { type: "select", name: "course", label: "Course", options: ["B.Tech", "BCA", "MCA"] },
    { type: "textarea", name: "address", label: "Address" }
];

const formBuilder = new FormBuilder(fields, "formContainer", "formOutput");
formBuilder.createForm();
