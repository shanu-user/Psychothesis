package com.example.psychothesis.activities

import android.os.Bundle
import android.util.Log
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.FragmentTransaction
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.NavController
import androidx.navigation.ui.NavigationUI.setupWithNavController
import com.example.psychothesis.R
import com.example.psychothesis.fragments.CalendarFragment
import com.example.psychothesis.fragments.ChatFragment
import com.example.psychothesis.fragments.HomeFragment
import com.example.psychothesis.fragments.ProfileFragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class ProfileActivity : AppCompatActivity() {
//    private val TAG = "ProfileActivity"
    private lateinit var navController: NavController

    //NOTE:Here initialize a variable which should be initialized while changing fragment_container to home_fragment so that NavHostFragment should not be null
    //That value should be passed as argument to findFragmentById so that we can change fragments




    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)


        //Enable edge-to-edge display if supported
        enableEdgeToEdge()

        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottom_navigation)

        replaceFragment(HomeFragment())

        bottomNavigationView.setOnItemSelectedListener { item ->
            when (item.itemId) {
                R.id.home_btn -> {
                    replaceFragment(HomeFragment())
                    true
                }
                R.id.calendar_btn -> {
                    replaceFragment(CalendarFragment())
                    true
                }
                R.id.chat_btn -> {
                    replaceFragment(ChatFragment())
                    true
                }
                R.id.profile_btn -> {
                    replaceFragment(ProfileFragment())
                    true
                }
                else -> false
            }
        }

    }

    private fun replaceFragment(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commit()
    }

}

