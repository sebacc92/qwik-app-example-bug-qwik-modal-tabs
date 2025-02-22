import { component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Tabs } from "flowbite-qwik";
import { Button } from "~/components/ui";
import Modal from "~/components/Modal";

export default component$(() => {
  const showModal = useSignal(false);

  return (
    <div class="flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
      <div class="flex flex-col min-h-0">
        <div class="h-full overflow-y-auto">
          <Tabs>
            <Tabs.Tab title="Tab 1">
              <Button
                class="m-2 bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600"
                onClick$={() => showModal.value = true}
              >
                Tab 1
              </Button>
              <Modal
                title="Title"
                description="Description"
                show={showModal}
              >
                Modal content
              </Modal>

            </Tabs.Tab>
            <Tabs.Tab title="Tab 2">
              Tab 2
            </Tabs.Tab>
            <Tabs.Tab title="Tab 3">
              Tab 3
            </Tabs.Tab>
            <Tabs.Tab title="Issues">
              Issues
            </Tabs.Tab>
            <Tabs.Tab title="Members">
              Members
            </Tabs.Tab>
          </Tabs>
        </div>

      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
