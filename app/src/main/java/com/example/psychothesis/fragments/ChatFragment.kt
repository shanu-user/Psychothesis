package com.example.psychothesis.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.psychothesis.R
import com.google.android.material.materialswitch.MaterialSwitch
import com.google.android.material.switchmaterial.SwitchMaterial

class ChatFragment : Fragment() {

    private lateinit var materialSwitch: MaterialSwitch
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_chat, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Initially load the first fragment
        swapFragment(TextFragment())

        // Example MaterialSwitch to swap fragments
        materialSwitch = view.findViewById(R.id.material_switch)
        materialSwitch.setOnCheckedChangeListener { _, isChecked ->
            if (isChecked) {
                swapFragment(TextFragment())
            } else {
                swapFragment(VideoFragment())
            }
        }
    }

    private fun swapFragment(fragment: Fragment) {
        childFragmentManager.beginTransaction().apply {
            replace(R.id.child_fragment_container, fragment)
            addToBackStack(null)
            commit()
        }
    }
}
