---
title: Motor Control Unit
platform: NXP S32K144
status: DEVELOPMENT
date: 07.03.2025
tags: [NXP S32K, CAN bus, BLDC, FOC, FreeRTOS]
summary: A compact BLDC motor controller featuring closed-loop field-oriented control, CAN FD communication, and real-time diagnostics for industrial applications.
featured: true
---

## Overview

The Motor Control Unit (MCU-02A) is an embedded controller for BLDC motors in industrial environments. It provides closed-loop torque control using field-oriented control (FOC) with real-time diagnostics over CAN FD.

## Hardware

Built around the NXP S32K144 (ARM Cortex-M4F, 112 MHz) for its hardware motor-control peripherals.

| Component | Part | Function |
|---|---|---|
| MCU | NXP S32K144 | Control core, FlexPWM, ADC |
| Gate driver | DRV8305 | 3-phase gate drive + protection |
| Current sense | INA240 | All 3 phases, precision |
| CAN transceiver | TJA1042 | CAN FD, 5 Mbit/s |

Form factor: 80 × 60 mm, industrial temperature range −40 °C to +85 °C.

## Firmware

Written in C with FreeRTOS. The FOC current loop runs on a dedicated high-priority task triggered by PWM period interrupts for deterministic timing under 1 ms.

- Field-oriented control with PI current regulators
- CANopen SDO/PDO object dictionary
- Non-volatile parameter storage via internal flash emulation
- CAN-based firmware update bootloader

## Status

Current loop closed and validated on bench. CAN communication stack complete. Field testing planned for Q2 2025.
