---
title: Escaperoom Game Controller
platform: ESP32 WROOM
status: PROTOTYPE
date: 01.10.2024
tags: [ESP32, MOSFET, Magnetometer, Accelerometer, I2S, UART, GPIO Expander]
summary: A compact universal PCB with an ESP32 as the brain — accelerometer for orientation detection, magnetometer for sensor fusion, 4 MOSFETs for higher current tasks, and an SD card with I2S amplifier for on-demand audio.
featured: true
model: /models/escaperoom-game-controller.glb
---

## Overview

Details coming soon.

## Hardware

| Component | Part | Function |
|---|---|---|
| MCU | ESP32 WROOM | Main controller, Wi-Fi/BT |
| Accelerometer | LSM6DS3 | Orientation detection, IMU |
| Magnetometer | QMC6309 | Sensor fusion |
| GPIO Expander | PI4IOE5V6416 | Extended I/O |
| Amplifier | MAX98357 | I2S class-D audio output |
| Power switching | 4× MOSFET | Higher current peripheral control |
