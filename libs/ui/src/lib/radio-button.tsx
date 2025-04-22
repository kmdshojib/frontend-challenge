"use client"

import type React from "react"

import DeleteIcon from "./delete-icon"
import { useState } from "react"

interface RadioButtonProps {
  label?: string
  checked: boolean
  onClick: () => void
  className?: string
  color?: string
  onDelete?: () => void
}

export function RadioButton({ checked, onClick, className = "", color = "violet", label, onDelete }: RadioButtonProps) {
  const [isHovering, setIsHovering] = useState(false)

  const handleRadioClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClick()
  }

  const handleLabelClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClick()
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (onDelete) {
      onDelete()
    }
  }

  return (
    <div
      className="flex items-center gap-2 w-full group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 border-${color}-600 flex items-center justify-center 
          bg-white cursor-pointer transition-all duration-300 
          ${isHovering ? `scale-110 shadow-sm border-${color}-700` : ""} ${className}`}
        onClick={handleRadioClick}
      >
        {checked && (
          <div
            className={`w-2.5 h-2.5 rounded-full bg-${color}-600 transition-all duration-300 
            ${isHovering ? `bg-${color}-700` : ""}`}
          />
        )}
      </div>

      {label && (
        <div
          className="border-b-2 w-full py-2 flex justify-between items-center 
            transition-all duration-300 hover:bg-gray-100 hover:rounded-lg hover:pl-2"
          onClick={handleLabelClick}
        >
          <p
            className={`text-lg lg:text-xl transition-all duration-300 
            ${checked ? "line-through text-gray-500" : ""} 
            ${isHovering ? "font-medium" : ""} cursor-pointer`}
          >
            {label}
          </p>

          <button
            type="button"
            title="Delete"
            onClick={handleDeleteClick}
            className="hidden group-hover:inline-block text-sm text-red-500 
              transition-all duration-300 hover:bg-red-100 hover:scale-110 
              active:scale-95 px-2 py-1 rounded-md"
          >
            <DeleteIcon size={18} />
          </button>
        </div>
      )}
    </div>
  )
}
