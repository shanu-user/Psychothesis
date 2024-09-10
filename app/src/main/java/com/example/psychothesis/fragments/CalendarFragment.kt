package com.example.psychothesis.fragments

import Event
import EventsAdapter
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.CalendarView
import android.widget.CheckBox
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.psychothesis.R
import java.util.*
import java.text.SimpleDateFormat


class CalendarFragment : Fragment() {

    private lateinit var selectedDateTextView: TextView
    private lateinit var eventsRecyclerView: RecyclerView
    private lateinit var calendarView: CalendarView
    private lateinit var eventsAdapter: EventsAdapter
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_calendar, container, false)
        val createEventButton= view.findViewById<Button>(R.id.createEventButton)
        createEventButton.setOnClickListener {
            parentFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, EventFragment())
                .addToBackStack(null)
                .commit()
        }
        calendarView = view.findViewById(R.id.calendarView)
        eventsRecyclerView = view.findViewById(R.id.eventsRecyclerView)

        //Initialize RecyclerView
        eventsRecyclerView.layoutManager = LinearLayoutManager(context)
        eventsAdapter = EventsAdapter(getSampleEvents())
        eventsRecyclerView.adapter = eventsAdapter

        val today = SimpleDateFormat("d/M/yyyy", Locale.getDefault()).format(Date())
        eventsAdapter.updateEvents(getSampleEvents())

        return view


    }


    private fun getSampleEvents(): List<Event> {
        return listOf(
            Event(1, 1, "Meeting with Bob", "Discuss the project updates", "2024-06-29 10:00:00", "2024-06-29 11:00:00", "2024-06-28 12:00:00"),
            Event(2, 1, "Lunch with Alice", "Catch up with Alice at the cafe", "2024-06-29 13:00:00", "2024-06-29 14:00:00", "2024-06-28 12:00:00")
        )
    }

    private fun getEventsForDate(date: String): List<Event> {
        // For now, return sample data. Later, fetch from server.
        return getSampleEvents()
    }

    private fun updateEvents(events: List<Event>) {
        eventsRecyclerView.removeAllViews()
        for (event in events) {
            val checkBox = CheckBox(context)
            checkBox.text = "${event.event_title}: ${event.event_description}"
            eventsRecyclerView.addView(checkBox)
        }
    }
}
