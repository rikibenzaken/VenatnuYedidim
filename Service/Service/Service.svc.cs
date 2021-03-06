﻿using Service.Entities;
using Service.Utilities;
using System;
using System.Collections.Generic;
using System.Net.Mail;

namespace Service
{
    public class Service : IService
    {
        #region Person

        //public Person GetPerson(int iPersonId)
        //{
        //    return Person.GetPerson(iPersonId);
        //}
        #endregion

        #region User

        public List<User> GetUsers(int iPersonId)
        {
            return User.GetUsers(iPersonId);
        }

        public User GetUser(int iPersonId)
        {
            return User.GetUser(iPersonId);
        }

        public User Login(string nvUserName, string nvPassword)
        {
            return User.Login(nvUserName, nvPassword);
        }

        public bool SetUser(User user, int iUserId)
        {
            return User.SetUser(user, iUserId);
        }

        #endregion

        #region Meeting

        public List<Meeting> GetMeetingsByStudentId(int iPersonId)
        {
            return Meeting.GetMeetingsByStudentId(iPersonId);
        }
        //public bool AddMeeting(Meeting meeting, int iUserId)
        //{
        //    return Meeting.SetMeeting(meeting, iUserId);
        //}

        public int SetMeeting(Meeting meeting, int iUserId)
        {
            return Meeting.SetMeeting(meeting, iUserId);
        }


        //public bool UpdateMeeting(Meeting meeting, int iUserId)
        //{
        //    return Meeting.UpdateMeeting(meeting, iUserId);
        //}
        public bool DeleteMeeting(int iMeetingId, int iUserId)
        {
            return Meeting.DeleteMeeting(iMeetingId, iUserId);
        }

        #endregion

        #region Task

        public bool SetTask(Task task, int iUserId)
        {
            return Task.SetTask(task, iUserId);
        }

        #endregion

        #region Student

        public List<Student> GetStudentList(int iUserId)
        {
            return Student.GetStudentList(iUserId);
        }

		public List<Yeshivot> GetYeshivotOfStudent(int iPersonId)
		{
			return Student.GetYeshivotOfStudent(iPersonId);
		}

		public Student GetStudentById(int iUserId)
        {
            return Student.GetStudentById(iUserId);
        }

        public bool AddStudentsToAvrech(List<T2Int> studentAndAvrechArr, int iUserId)
        {
            return Student.AddStudentsToAvrech(studentAndAvrechArr, iUserId);
        }

        public bool AddStudent(Student student, string base64Image, int iUserId)
        {
            return Student.AddStudent(student, base64Image, iUserId);
        }


        public bool UpdateStudent(Student student, string base64Image, int iUserId)
        {
            return Student.UpdateStudent(student, base64Image, iUserId);
        }


        public bool UpdateStatusStudent(int iPersonId, int iStatusType)
        {
            return Student.UpdateStatusStudent(iPersonId, iStatusType);
        }

        public bool UnionCards(Student student, int iStudent2)
        {
            return Student.UnionCards(student, iStudent2);
        }

        #endregion


        #region Event
        public bool SetEvent(Event1 oEvent, int iUserId, List<TInt> to)
        {
            return Event1.SetEvent(oEvent, iUserId, to);
        }

        public List<Event1> GetEventsList(int iUserId)
        {
            return Event1.GetEventsList(iUserId);
        }

        public Event1 GetEvent(int? iEventId)
        {
            return Event1.GetEvent(iEventId);
        }

        #endregion
        #region Avrech


        public List<Avrech> GetAllAvrechim(int? iPersonId)
        {
            return Avrech.GetAllAvrechim(iPersonId);
        }

        public Avrech GetAvrechById(int? iPersonId)
        {
            return Avrech.GetAvrechById(iPersonId);
        }

        public List<Student> GetAvrechStudents(int iPersonId)
        {
            return Avrech.GetAvrechStudents(iPersonId);
        }

        public bool DeleteAvrechStudent(int iAvrechId, int iStudentId)
        {
            return Avrech.DeleteAvrechStudent(iAvrechId, iStudentId);
        }


        public bool UpdateAvrech(Avrech avrech, int iUserId)
        {
            return Avrech.UpdateAvrech(avrech, iUserId);
        }

        public bool UpdateUserNameAndPassword(int iPersonId, string nvUserName, string nvPassword, int iUserId)
        {
            return Avrech.UpdateUserNameAndPassword(iPersonId, nvUserName, nvPassword, iUserId);
        }
        public bool DeleteAvrech(int iPersonId)
        {
            return Avrech.DeleteAvrech(iPersonId);
        }


        #endregion



        #region SysTableRow
        public List<SysTableRow> GetValues(int iSysTableId)
        {

            return SysTableRow.GetValues(iSysTableId);
        }
        public bool UpdateValue(SysTableRow sysTableRow)
        {
            return SysTableRow.UpdateValue(sysTableRow);
        }
        public bool AddValue(SysTableRow sysTableRow)
        {
            return SysTableRow.AddValue(sysTableRow);
        }

        #endregion

        #region SysTables

        public List<SysTables> GetAllNames()
        {
            return SysTables.GetAllNames();
        }


        #endregion

        #region Conversation

        public List<Conversation> GetConversations(int? iPersonId)
        {
            return Conversation.GetConversations(iPersonId);
        }
        public bool SetConversations(Conversation conversation, int iPersonId)
        {
            return Conversation.SetConversation(conversation, iPersonId);
        }
        //public bool AddConversations(Conversation conversation, int iPersonId)
        //{
        //    return Conversation.AddConversation(conversation, iPersonId);
        //}
        //public bool UpdateConversations(Conversation conversation, int iPersonId)
        //{
        //    return Conversation.UpdateConversation(conversation, iPersonId);
        //}
        public bool DeleteConversations(int iConversationId, int iPersonId)
        {
            return Conversation.DeleteConversation(iConversationId, iPersonId);
        }

        #endregion

        #region yeshivot

        public List<Yeshivot> GetAllYeshivot()
        {
            return Yeshivot.GetAllYeshivot();
        }

        public bool AddYeshiva(Yeshivot yeshiva)
        {
            return Yeshivot.AddYeshiva(yeshiva);
        }

        public bool EditYeshiva(Yeshivot yeshiva, int iYeshivaId)
        {
            return Yeshivot.EditYeshiva(yeshiva, iYeshivaId);
        }

        public Yeshivot getYeshivaById(int iYeshivaId)
        {
            return Yeshivot.getYeshivaById(iYeshivaId);
        }
        public bool DeleteYeshiva(int iYeshivaId, int iLastModifyUserId)
        {
            return Yeshivot.DeleteYeshiva(iYeshivaId, iLastModifyUserId);
        }

        #endregion

        #region Documents
        public List<Document> GetDocuments()
        {
            return Document.GetDocuments();
        }
        public string SaveFileByBase64(string base64File, string fileName)
        {
            return Fileshandler.SaveFileByBase64(base64File, fileName);
        }

        //public bool AddFile(int iItemId, int iBelongingType, int iCategoryType, string nvBase64File, string nvFileName, string nvComment)
        //{
        //    return Document.AddFile(iItemId, iBelongingType, iCategoryType, nvBase64File, nvFileName, nvComment);
        //}
        public int SetDocument(Document document, string nvBase64File, int iUserId)
        {
            return Document.SetDocument(document, nvBase64File, iUserId);
        }


        public List<Document> GetDocumentsByItemId(int iItemId)
        {
            return Document.GetDocumentsByItemId(iItemId);
        }


        public bool DeleteDocument(int iDocumentId, int iLastModifyUserId)
        {
            return Document.DeleteDocument(iDocumentId, iLastModifyUserId);
        }



        #endregion

        #region participant

        public List<Person> GetParticipantsList(int iEventId)
        {
            return Participant.GetParticipantsList(iEventId);
        }

        public List<Student> GetGraduatesList(int iUserId)
        {
            //throw new NotImplementedException();
            return Student.GetGraduatesList(iUserId);
        }

        #endregion


        #region Fileshandler

        public string GeneratPdf(string headerHtml, string bodyHtml, string footerHtml)
        {
            return Fileshandler.GeneratPdf(headerHtml, bodyHtml, footerHtml);
        }

        #endregion

        #region SendMessagesHandler

        public bool SendEmailOrFax(string from, string to, string subject, string body, List<Attachment> lAttach)
        {
            return SendMessagesHandler.SendEmailOrFax(from, to, subject, body, lAttach);
        }
        #endregion
        #region GlobalParameters

        public bool SaveGlobalParameters(List<TGlobalParameters> GlobalParameters)
        {
            return TGlobalParameters.SaveGlobalParameters(GlobalParameters);
        }

        public List<TGlobalParameters> GetGlobalParameters()
        {
            return TGlobalParameters.GetGlobalParameters();
        }

        #endregion
    }
}