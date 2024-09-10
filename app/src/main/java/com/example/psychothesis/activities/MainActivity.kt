package com.example.psychothesis.activities

import android.os.Bundle
import android.content.Intent
import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.view.animation.AnimationUtils
import android.widget.LinearLayout
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import com.example.psychothesis.databinding.ActivityMainBinding
import androidx.core.view.WindowInsetsCompat
import com.example.psychothesis.activities.ProfileActivity
import com.example.psychothesis.R
import com.example.psychothesis.activities.LoginActivity

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        val loginButton = findViewById<Button>(R.id.loginButton)
        val signupButton = findViewById<Button>(R.id.signupButton)

        loginButton.setOnClickListener {
            val loginIntent = Intent(this, LoginActivity::class.java)
            startActivity(loginIntent)
        }

        signupButton.setOnClickListener {
//            val signupIntent = Intent(this, SignupActivity::class.java)
            val profileIntent = Intent(this, ProfileActivity::class.java)
            startActivity(profileIntent)
        }
        //Here animation starts
//        Handler(Looper.getMainLooper()).postDelayed({
//            animateLogoAndShowButtons()
//        }, 10000)
    }

    //Function for performing basic animations
        private fun animateLogoAndShowButtons() {
            // Load the animation from XML
            val moveUpAnimation = AnimationUtils.loadAnimation(this, R.anim.move_up)

            //Load the variables for components
            val imageView = findViewById<ImageView>(R.id.imageView)
            val secondLayout = findViewById<LinearLayout>(R.id.view3)

            // Start the animation on the logo
            imageView.startAnimation(moveUpAnimation)

            // Set an animation listener to show buttons after the logo animation ends
            moveUpAnimation.setAnimationListener(object :
                android.view.animation.Animation.AnimationListener {
                override fun onAnimationStart(animation: android.view.animation.Animation?) {}

                override fun onAnimationEnd(animation: android.view.animation.Animation?) {
                    // Show the button container

                    secondLayout.visibility = View.VISIBLE

                    // Optionally, you can add fade-in animation for the buttons
                    val fadeInAnimation =
                        AnimationUtils.loadAnimation(this@MainActivity, android.R.anim.fade_in)
                    secondLayout.startAnimation(fadeInAnimation)
                }

                override fun onAnimationRepeat(animation: android.view.animation.Animation?) {}
            })
        }
}
