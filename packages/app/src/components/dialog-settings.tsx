import { Component, createMemo, For } from "solid-js"
import { useDialog } from "@opencode-ai/ui/context/dialog"
import { useTheme, type ColorScheme } from "@opencode-ai/ui/theme"
import { Dialog } from "@opencode-ai/ui/dialog"
import { Button } from "@opencode-ai/ui/button"
import { DialogSelectProvider } from "./dialog-select-provider"
import { DialogManageModels } from "./dialog-manage-models"

const colorSchemeOrder: ColorScheme[] = ["system", "light", "dark"]
const colorSchemeLabel: Record<ColorScheme, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
}

export const DialogSettings: Component = () => {
  const dialog = useDialog()
  const theme = useTheme()
  const availableThemeEntries = createMemo(() => Object.entries(theme.themes()))

  return (
    <Dialog title="Settings">
      <div class="flex flex-col gap-4 px-4 pb-4">
        {/* Provider Section */}
        <div class="flex flex-col gap-2">
          <div class="text-12-medium text-text-weak uppercase tracking-wider">Providers</div>
          <div class="flex flex-col gap-2">
            <Button
              variant="secondary"
              class="w-full justify-start"
              icon="plus-small"
              onClick={() => dialog.show(() => <DialogSelectProvider />)}
            >
              Connect provider
            </Button>
            <Button
              variant="ghost"
              class="w-full justify-start text-text-base"
              icon="settings-gear"
              onClick={() => dialog.show(() => <DialogManageModels />)}
            >
              Manage models
            </Button>
          </div>
        </div>

        {/* Theme Section */}
        <div class="flex flex-col gap-2">
          <div class="text-12-medium text-text-weak uppercase tracking-wider">Theme</div>
          <div class="flex flex-wrap gap-2">
            <For each={availableThemeEntries()}>
              {([id, definition]) => (
                <Button
                  variant={theme.themeId() === id ? "primary" : "secondary"}
                  size="small"
                  onClick={() => theme.setTheme(id)}
                >
                  {definition.name ?? id}
                </Button>
              )}
            </For>
          </div>
        </div>

        {/* Color Scheme Section */}
        <div class="flex flex-col gap-2">
          <div class="text-12-medium text-text-weak uppercase tracking-wider">Color Scheme</div>
          <div class="flex gap-2">
            <For each={colorSchemeOrder}>
              {(scheme) => (
                <Button
                  variant={theme.colorScheme() === scheme ? "primary" : "secondary"}
                  size="small"
                  onClick={() => theme.setColorScheme(scheme)}
                >
                  {colorSchemeLabel[scheme]}
                </Button>
              )}
            </For>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
