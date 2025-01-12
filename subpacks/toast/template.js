import { system } from "@minecraft/server"
export function sendNotification(player, message, playSound = true) {
    if (playSound) player.playSound("random.toast_recipe_unlocking_in")
    player.onScreenDisplay.setTitle(`notification.${message}`)
    if (playSound) system.runTimeout(() => player?.isValid() && player.playSound("random.toast_recipe_unlocking_out"), 108)
}